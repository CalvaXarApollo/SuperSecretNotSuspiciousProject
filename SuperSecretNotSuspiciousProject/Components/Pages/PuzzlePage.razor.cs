using Microsoft.AspNetCore.Components;
using SuperSecretNotSuspiciousProject.Core.Models;
using SuperSecretNotSuspiciousProject.Core.Services;

namespace SuperSecretNotSuspiciousProject.Components.Pages;

public partial class PuzzlePage : ComponentBase
{
    private IEnumerable<Puzzle>? _puzzles;
    private Puzzle? _currentPuzzle;
    [Inject] public required PuzzleService PuzzleService { get; set; }
    
    protected override async Task OnInitializedAsync()
    {
        _puzzles = await PuzzleService.GetPuzzles();
        _currentPuzzle = _puzzles.MinBy(x => x.PuzzleSequenceId);
        
        await base.OnInitializedAsync();
    }
}