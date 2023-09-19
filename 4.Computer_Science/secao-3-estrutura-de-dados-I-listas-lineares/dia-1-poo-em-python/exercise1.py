class TV:
  def __init__(self, tamanho):
    self._volume = 50
    self._canal = 1
    self._tamanho = tamanho
    self._ligada = False
  
  def aumentar_volume(self):
    if self._volume < 99:
      self._volume += 1

  def diminuir_volume(self):
      if self.__volume > 0:
          self.__volume -= 1

  def modificar_canal(self, canal):
      if canal <= 1 or canal >= 99:
          raise ValueError('Canal indisponível')

      self.__canal = canal

  def ligar_desligar(self):
      self.__ligada = not self.__ligada