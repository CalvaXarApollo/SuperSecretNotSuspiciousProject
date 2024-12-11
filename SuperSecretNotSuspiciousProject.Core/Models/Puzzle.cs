namespace SuperSecretNotSuspiciousProject.Core.Models;

public class Puzzle
{
    public int PuzzleSequenceId { get; set; }
    public string? Question { get; set; }
    public string? Answer { get; set; }
    public int SecretLetterId { get; set; }
}