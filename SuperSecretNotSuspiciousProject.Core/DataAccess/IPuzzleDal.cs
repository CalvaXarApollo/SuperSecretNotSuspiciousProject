using SuperSecretNotSuspiciousProject.Core.Models;

namespace SuperSecretNotSuspiciousProject.Core.DataAccess;

public interface IPuzzleDal
{
    public Task<IEnumerable<Puzzle>> GetPuzzles();
}