using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace SuperSecretNotSuspiciousProject.Components.Pages;

public partial class WelcomePage : ComponentBase
{
    private async Task DisplayStory()
    {
        await Js.InvokeVoidAsync("displayStory");
    }
}