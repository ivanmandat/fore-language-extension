# MetabaseObjectsIconView.invertSelection

MetabaseObjectsIconView.invertSelection
-


# MetabaseObjectsIconView.invertSelection


## Синтаксис


invertSelection();


## Описание


Метод invertSelection инвертирует
 отметку элементов контейнера.


## Комментарии


Метод отмечает те элементы, которые не были отмечены, и снимает отметку
 с тех, которые были отмечены.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [MetabaseObjectsIconView](../../../Components/Metabase/MetabaseObjectsIconView/MetabaseObjectsIconView.htm)
 с идентификатором «list1» (см. «[Пример
 создания компонента MetabaseObjectsIconView](../../../Components/Metabase/MetabaseObjectsIconView/Example_MetabaseObjectsIconView.htm)»). В теге BODY добавьте
 элементы div с идентификаторами «div1», «div2», «div3».


Добавим на страницу кнопки «but1», «but2» и «but3», обработаем события
 нажатия на них:


// Кнопка выделяет все элементы контейнера
    var but1 = new PP.Ui.Button({
        ParentNode: document.getElementById("div1"),
        Content: "Select all"
    })
    but1.Click.add(function (sender, args) {
        list1.selectAll();
    })
    // Кнопка снимает выделение со всех элементов контейнера
    var but2 = new PP.Ui.Button({
        ParentNode: document.getElementById("div2"),
        Content: "Deselect all"
    })
    but2.Click.add(function (sender, args) {
        list1.deSelectAll()
    })
    // Кнопка инвертирует отметку
    var but3 = new PP.Ui.Button({
        ParentNode: document.getElementById("div3"),
        Content: "Invert selection"
    })
    but3.Click.add(function (sender, args) {
        list1.invertSelection()
    })
В результате выполнения примера будут размещены следующие кнопки:


	- Select all. При нажатии
	 на кнопку будут выделены все элементы контейнера;


	- Deselect all. При нажатии
	 на кнопку будет снята отметка выделения со всех элементов контейнера;


	- Invert selection. При
	 нажатии на кнопку отметка будет инвертирована.


См. также:


[MetabaseObjectsIconView](MetabaseObjectsIconView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
