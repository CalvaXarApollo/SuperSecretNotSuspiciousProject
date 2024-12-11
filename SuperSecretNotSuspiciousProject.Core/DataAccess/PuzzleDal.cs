using SuperSecretNotSuspiciousProject.Core.Models;

namespace SuperSecretNotSuspiciousProject.Core.DataAccess;

public class PuzzleDal : IPuzzleDal
{
    public async Task<IEnumerable<Puzzle>> GetPuzzles()
    {
        return new List<Puzzle>
        {
            new()
            {
                PuzzleSequenceId = 0,
                Question = "This is a riddle",
                Answer = "Answer",
                SecretLetterId = 1
            }
        };
    }
}