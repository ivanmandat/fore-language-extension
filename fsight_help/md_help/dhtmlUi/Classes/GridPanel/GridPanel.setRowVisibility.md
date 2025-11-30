# GridPanel.setRowVisibility

GridPanel.setRowVisibility
-


# GridPanel.setRowVisibility


## Синтаксис


setRowVisibility (rowNumber, value);


## Параметры


rowNumber. Порядковый номер строки;


value. Определяет, является ли строка видимой.


## Описание


Метод setRowVisibility определяет, отображается ли указанная строка таблицы.


## Пример


Для выполнения примера на html-странице предполагается наличие компонента [GridPanel](../../Components/GridPanel/GridPanel.htm) с наименованием «container» (см. «[Пример создания компонента GridPanel](../../Components/GridPanel/GridPanel_example.htm)»). Необходимо наличие тегов DIV с идентификаторами «ne1» и «ch1». Добавим на страницу [числовой редакторы](../NumberEdit/NumberEdit.htm), в котором устанавливается номер строки (от 0) и [флажок](../../Components/CheckBox/CheckBox.htm), определяющий, отображается ли указанная строка:


    var numberV = new PP.Ui.[NumberEdit](../NumberEdit/NumberEdit.htm)({ ParentNode: document.getElementById("ne1"), Width: 50, [MaxValue](../NumberEdit/NumberEdit.MaxValue.htm): 1 });


    row = numberV.getValue();


    var check = new PP.Ui.[CheckBox](../CheckBox/CheckBox.htm)({ ParentNode: document.getElementById("ch1"), Content: "Видимость" });


    check.[setChecked](../CheckBox/CheckBox.Checked.htm)(true);


    check.[CheckedChanged](../CheckBox/CheckBox.CheckedChanged.htm).add(function (sender, args) {


        visible = check.[getChecked](../CheckBox/CheckBox.Checked.htm)();


        container.setRowVisibility(row, visible)


});


После выполнения примера на html-страницу будут добавлены числовой редактор, значение которого определяет номер строки, и флаг «Видимость», при снятии которого будет скрыта указанная строка.


См. также:


[GridPanel](GridPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
