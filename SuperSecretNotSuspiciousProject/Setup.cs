using SuperSecretNotSuspiciousProject.Core.DataAccess;
using SuperSecretNotSuspiciousProject.Core.Services;

namespace SuperSecretNotSuspiciousProject;

public class Setup
{
    public static void SetupServices(IServiceCollection services)
    {
        services.AddSingleton<IPuzzleDal, PuzzleDal>();
        services.AddSingleton<PuzzleService>();
    }
}