# TagCloudItem.CurrentColor

TagCloudItem.CurrentColor
-


# TagCloudItem.CurrentColor


## Синтаксис


CurrentColor: Object


## Описание


Свойство CurrentColor определяет
 текущий цвет элемента облака меток.


## Комментарии


Объект содержит следующие поля:


	- R.
	 Значение красной компоненты цвета;


	- G.
	 Значение зеленой компоненты цвета;


	- B.
	 Значение синей компоненты цвета.


Текущий цвет метки - это цвет метки на текущем шаге анимации. Если [целевое значение цвета](TagCloudItem.TargetColor.htm) не
 задано, то данное свойство принимает значение свойства [Color](TagCloudItem.Color.htm).


Значение свойства устанавливается из JSON и с помощью метода setCurrentColor,
 а возвращается с помощью метода getCurrentColor.


## Пример


Пример использования свойства приведен в описании свойства [TagCloudItem.CurrentPosition](TagCloudItem.CurrentPosition.htm).


См. также:


[TagCloudItem](TagCloudItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
