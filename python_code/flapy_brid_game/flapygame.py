import pygame
import sys
pygame.init()
class Game:
    def __init__(self):
        self.width = 600
        self.height = 768
        self.win = pygame.display.set_mode((self.width, self.height))
        self.bg_img = pygame.image.lod("background.png.png").convert()
        self.gameLoop()


    def gameLoop(self):
        while True:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    pygame.quit()
                    sys.exit()
            self.win.blit(self.bg_imag,(0,0))
            pygame.display.update()