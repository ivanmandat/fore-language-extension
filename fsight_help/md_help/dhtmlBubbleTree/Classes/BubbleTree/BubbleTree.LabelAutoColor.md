# BubbleTree.LabelAutoColor

BubbleTree.LabelAutoColor
-


# BubbleTree.LabelAutoColor


## Синтаксис


LabelAutoColor: Boolean;


## Описание


Свойство LabelAutoColor определяет,
 будет ли цвет текста элементов пузырькового дерева рассчитываться автоматически.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setLabelAutoColor,
 а возвращается с помощью метода getLabelAutoColor.


Допустимые значения:


	- True. Значение по умолчанию.
	 Цвет текста элементов пузырькового дерева будет рассчитывается автоматически
	 - в зависимости от цвета фона элемента цвет текста будет либо чёрным,
	 либо белым;


	- False. Цвет текста элементов
	 пузырькового дерева будет устанавливаться из настроек, установленных
	 с помощью свойства [BubbleTree.InnerLabelsStyle](BubbleTree.InnerLabelsStyle.htm).


## Пример


Пример использования свойства представлен в содержимом файла BubbleTreeData.js,
 приведённом на странице «[Пример
 создания компонента BubbleTree](../../Components/BubbleTree/BubbleTree_Example.htm)».


См. также:


[BubbleTree](BubbleTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
