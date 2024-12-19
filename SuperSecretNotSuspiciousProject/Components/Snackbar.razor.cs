using Microsoft.AspNetCore.Components;

namespace SuperSecretNotSuspiciousProject.Components;

public partial class Snackbar : ComponentBase
{
    [Parameter] public string? Message { get; set; }
    [Parameter] public string SnackbarClass { get; set; } = "snackbar-default";
    private bool IsVisible { get; set; }

    public async Task ShowMessage(string message, string cssClass = "snackbar-default", int duration = 3000)
    {
        Message = message;
        SnackbarClass = cssClass;
        IsVisible = true;
        StateHasChanged();
        
        await Task.Delay(duration);
        IsVisible = false;
        StateHasChanged();
    }
}