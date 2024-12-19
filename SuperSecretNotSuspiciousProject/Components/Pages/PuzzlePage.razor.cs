using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using SuperSecretNotSuspiciousProject.Core.Models;
using SuperSecretNotSuspiciousProject.Core.Services;

namespace SuperSecretNotSuspiciousProject.Components.Pages;

public partial class PuzzlePage : ComponentBase
{
    [Inject] public required PuzzleService PuzzleService { get; set; }

    private IEnumerable<Puzzle> _puzzles = new List<Puzzle>();
    private Puzzle? _currentPuzzle;
    private Snackbar? _snackbar;

    protected override async Task OnInitializedAsync()
    {
        _puzzles = await PuzzleService.GetPuzzles();
        _currentPuzzle = _puzzles.MinBy(x => x.PuzzleSequenceId);

        await base.OnInitializedAsync();
    }

    private async Task CheckAnswer()
    {
        if (_currentPuzzle is null) return;

        var result = await Js.InvokeAsync<bool>("checkAnswer", _currentPuzzle.Answer);

        if (result)
        {
            if (_snackbar != null)
                await _snackbar.ShowMessage("Correct!", "snackbar-success");

            if (_currentPuzzle == _puzzles.MaxBy(x => x.PuzzleSequenceId))
            {
                await Js.InvokeVoidAsync("congratulations");
            }
            else
            {
                _currentPuzzle = _puzzles.FirstOrDefault(x => x.PuzzleSequenceId == _currentPuzzle.PuzzleSequenceId + 1);

                StateHasChanged();
            }
        }
        else
        {
            if (_snackbar != null)
                await _snackbar.ShowMessage("Incorrect! Try again!", "snackbar-error");
        }
    }
}