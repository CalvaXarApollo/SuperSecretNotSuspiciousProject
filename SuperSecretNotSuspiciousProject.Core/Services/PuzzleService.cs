using SuperSecretNotSuspiciousProject.Core.DataAccess;
using SuperSecretNotSuspiciousProject.Core.Models;

namespace SuperSecretNotSuspiciousProject.Core.Services;

public class PuzzleService
{
    private readonly IPuzzleDal _puzzleDal;

    public PuzzleService(IPuzzleDal puzzleDal)
    {
        _puzzleDal = puzzleDal;
    }

    public async Task<IEnumerable<Puzzle>> GetPuzzles()
    {
        return await _puzzleDal.GetPuzzles();
    }
}