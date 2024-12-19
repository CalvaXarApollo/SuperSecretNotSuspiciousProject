namespace SuperSecretNotSuspiciousProject.Core.Models;

public class Puzzle
{
    public int PuzzleSequenceId { get; set; }
    public string? Heading { get; set; }
    public string? Question { get; set; }
    public string? Answer { get; set; }
    public char? SecretLetter { get; set; }
    public string? ImageUrl { get; set; }
}