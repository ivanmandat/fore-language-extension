# Dashboard.getOpenDialog

Dashboard.getOpenDialog
-


# Dashboard.getOpenDialog


## Синтаксис


getOpenDialog();


## Описание


Метод getOpenDialog возвращает
 диалог открытия объекта из репозитория.


## Комментарии


Метод возвращает экземпляр класса [PP.Ui.MetabaseOpenDialog](dhtmlMetabase.chm::/Classes/Metabase/Dialogs/MetabaseOpenDialog/MetabaseOpenDialog.htm).


## Пример


Для выполнения примера убедитесь, что в репозитории содержится аналитическая
 панель с ключом «88665».


Создайте HTML-страницу с [примером
 размещения компонента KapBox](../../Components/KapBox/KapBox_example.htm) и выполните следующие действия:


	- Откройте аналитическую панель с ключом «88665»:


		- выполните команду «Документ
		 > Открыть» в главном меню;


		- выполните в консоли:


kapBox.open({
    Key: 88665
});


	- Выполните в консоли:


var openDialogButton = new PP.Ui.Button({
    ParentNode: "but",
    Content: "Открыть",
    Click: function () {
        kapBox.getOpenDialog().show();
    }
});
var saveDialogButton = new PP.Ui.Button({
    ParentNode: "but",
    Content: "Сохранить",
    Click: function () {
        kapBox.getSaveDialog().show();
    }
});

После выполнения примера будут добавлены кнопки «Открыть»
 и «Сохранить», при нажатии на
 которые открываются соответствующие диалоги для открытия другой аналитической
 панели и сохранения объекта репозитория.


См. также:


[Dashboard](Dashboard.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
