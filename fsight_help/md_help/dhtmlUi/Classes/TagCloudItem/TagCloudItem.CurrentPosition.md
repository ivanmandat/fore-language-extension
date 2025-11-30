# TagCloudItem.CurrentPosition

TagCloudItem.CurrentPosition
-


# TagCloudItem.CurrentPosition


## Синтаксис


CurrentPosition: Object


## Описание


Свойство CurrentPosition определяет
 текущую позицию элемента облака меток.


## Комментарии


Объект содержит следующие поля:


	- Position. Позиция элемента, объект класса PP.Vector3;


	- FontSize.
	 Размер шрифта заголовка;


	- Alpha.
	 Значение прозрачности элемента;


	- Color.
	 Цвет текста;


	- Scale.
	 Масштаб.


Значение свойства устанавливается из JSON и с помощью метода setCurrentPosition,
 а возвращается с помощью метода getCurrentPosition.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TagCloud](../../Components/TagCloud/TagCloud.htm) c наименованием
 «tagCloud» (см. «[Пример
 создания компонента TagCloud](../../Components/TagCloud/Example_TagCloud.htm)»). Пример нужно разместить в теге <script>.
 Получим текущие позицию и цвет первой метки облака:


// Получаем текущий цвет первой метки
var currentColor = tagCloud.getItems()[0].getCurrentColor();
console.log("Текущий цвет первой метки: R = " + currentColor.R + ", G = " + currentColor.G + ", B = " + currentColor.B);
// Получаем текущий цвет первой метки в шестнадцатеричном виде
console.log("Текущий цвет первой метки в шестнадцатеричном виде: " + tagCloud.getItems()[0].getCurrentColorInHex());
// Получаем текущие координаты первой метки
var currentXYZ = tagCloud.getItems()[0].getCurrentPosition().Position;
console.log("Текущая координата X: " + currentXYZ.getX());
console.log("Текущая координата Y: " + currentXYZ.getY());
console.log("Текущая координата Z: " + currentXYZ.getZ());
В результате в консоль будут выведены текущие координаты положения и
 текущий цвет первой метки облака:


Текущий цвет первой метки: R = 255, G = 70, B =
 44


Текущий цвет первой метки в шестнадцатеричном виде:
 #ff462c


Текущая координата X: 150


Текущая координата Y: -112.5


Текущая координата Z: 0


См. также:


[TagCloudItem](TagCloudItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
