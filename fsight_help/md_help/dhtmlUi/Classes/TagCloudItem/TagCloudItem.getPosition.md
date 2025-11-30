# TagCloudItem.getPosition

TagCloudItem.getPosition
-


# TagCloudItem.getPosition


## Синтаксис


getPosition();


## Описание


Метод getPosition возвращает
 позицию элемента области меток.


## Комментарии


Возвращаемое значение - объект класса PP.Vector3.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TagCloud](../../Components/TagCloud/TagCloud.htm) c наименованием
 «tagCloud» (см. «[Пример
 создания компонента TagCloud](../../Components/TagCloud/Example_TagCloud.htm)»). Пример нужно разместить в теге <script>.
 Получим позицию первой метки облака:


// Получаем позицию первой метки облака
console.log("Координата X: " + tagCloud.getItems()[0].getPosition().getX());
console.log("Координата Y: " + tagCloud.getItems()[0].getPosition().getY());
console.log("Координата Z: " + tagCloud.getItems()[0].getPosition().getZ());
В результате в консоль будут выведены координаты положения первой метки
 облака:


Координата X: 150


Координата Y: -112.5


Координата Z: 0


См. также:


[TagCloudItem](TagCloudItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
