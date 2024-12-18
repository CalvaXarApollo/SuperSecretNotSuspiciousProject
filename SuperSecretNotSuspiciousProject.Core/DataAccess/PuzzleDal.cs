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
                Heading = "Find the Coordinates",
                Question = "Find your way north to uncover the coordinates of the first element. Enter the correct location:",
                Answer = "Answer",
                SecretLetterId = 1,
                ImageUrl = "puzzle-element2.png"
            },
            new()
            {
                PuzzleSequenceId = 1,
                Heading = "Enter the correct time",
                Question = "The rift is causing time to behave strangely here. The clock is glitching between different times. Enter the correct time to stabilise the rift:\n\n3:34",
                Answer = "Answer",
                SecretLetterId = 2,
                ImageUrl = "puzzle-element3.png"
            },
            new()
            {
                PuzzleSequenceId = 2,
                Heading = "Stop the time-disrupting anachronisms!",
                Question = "You're starting to fix the rift, but time periods are colliding here! Put the items in the correct order:\n\nRoman Sword, Knight's Armor, Futuristic Gadget",
                Answer = "Answer",
                SecretLetterId = 3,
                ImageUrl = "puzzle-element4.png"
            },
            new()
            {
                PuzzleSequenceId = 3,
                Heading = "Break free from the endless loop",
                Question = "Time loops are driving everyone mad here. Find the phrase that will break the loop:",
                Answer = "Answer",
                SecretLetterId = 4,
                ImageUrl = "puzzle-element.png"
            },
            new()
            {
                PuzzleSequenceId = 4,
                Heading = "Enter the final command",
                Question = "To seal the rift, enter the final command:",
                Answer = "Answer",
                SecretLetterId = 5,
                ImageUrl = "puzzle-element5.png"
            },
        };
    }
}