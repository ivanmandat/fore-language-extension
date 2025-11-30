# TagCloudItem.TargetPosition

TagCloudItem.TargetPosition
-


# TagCloudItem.TargetPosition


## Синтаксис


TargetPosition: Object


## Описание


Свойство TargetPosition определяет
 целевую позицию элемента облака меток.


## Комментарии


Целевая позиция - позиция элемента на следующем шагу анимации.


Объект содержит следующие поля:


	- Position. Целевая позиция элемента, объект класса
	 PP.Vector3;


	- FontSize.
	 Размер шрифта заголовка;


	- Alpha.
	 Значение прозрачности элемента;


	- Color.
	 Цвет текста;


	- Scale.
	 Масштаб.


Значение свойства устанавливается из JSON и с помощью метода setTargetPosition,
 а возвращается с помощью метода getTargetPosition.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TagCloud](../../Components/TagCloud/TagCloud.htm) c наименованием
 «tagCloud» (см. «[Пример
 создания компонента TagCloud](../../Components/TagCloud/Example_TagCloud.htm)»). Пример нужно разместить в теге <script>.
 Получим целевую позицию и целевой цвет первой метки облака:


// Получаем целевое значение цвета первой метки
var targetColor = tagCloud.getItems()[0].getTargetColor();
console.log("Целевое значение цвета первой метки: R = " + targetColor.R + ", G = " + targetColor.G + ", B = " + targetColor.B);
// Получаем целевые координаты первой метки
var targetXYZ = tagCloud.getItems()[0].getTargetPosition().Position;
console.log("Целевая координата X: " + targetXYZ.getX());
console.log("Целевая координата Y: " + targetXYZ.getY());
console.log("Целевая координата Z: " + targetXYZ.getZ());
В результате в консоль будут выведены целевые координаты положения и
 целевой цвет первой метки облака:


Целевое значение цвета активной метки: R =
 255, G = 70, B = 44


Целевая координата X: 150


Целевая координата Y: -112.5


Целевая координата Z: 0


См. также:


[TagCloudItem](TagCloudItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
