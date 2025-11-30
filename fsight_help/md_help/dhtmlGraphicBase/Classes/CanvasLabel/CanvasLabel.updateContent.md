# CanvasLabel.updateContent

CanvasLabel.updateContent
-


# CanvasLabel.updateContent


## Синтаксис


updateContent();


## Описание


Метод updateContent обновляет
 текст подписи на канве.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TreeMap](dhtmlBubbleTree.chm::/Components/TreeMap/TreeMap.htm)
 с наименованием «treeMap» (см. «[Пример
 создания компонента TreeMap](dhtmlBubbleTree.chm::/Components/TreeMap/TreeMap_example.htm)» ), а также должна быть создана подпись
 на канве (см. «[Конструктор CanvasLabel](Constructor_CanvasLabel.htm)»).
 Установим минимальный размер шрифта для подписи на канве и разрешим обрезку
 непомещающегося в ней текста по ширине с добавлением троеточия:


// Устанавливаем минимальный размер шрифта
canvasLabel.setMinSize(22);
// Обрезаем текст по ширине и добавляем троеточие
canvasLabel.setTextWrapping(PP.Ui.TextWrapping.Ellipsis);
// Обновляем текст подписи
canvasLabel.updateContent();
console.log("Новый текст подписи: «%s»", canvasLabel._contentStrings[0]);
В результате выполнения примера размер шрифта для подписи увеличился
 до 22 пикселей, из-за чего непомещающийся текст в ней был обрезан с добавлением
 троеточия:


Новый текст подписи: «Ст...»


[CanvasLabel](CanvasLabel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
