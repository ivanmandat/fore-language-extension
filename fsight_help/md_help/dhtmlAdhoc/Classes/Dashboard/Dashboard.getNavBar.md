# Dashboard.getNavBar

Dashboard.getNavBar
-


# Dashboard.getNavBar


## Синтаксис


getNavBar();


## Описание


Метод getNavBar возвращает параметры
 боковой панели для блока аналитической панели.


## Комментарии


Метод возвращает объект класса [PP.Ui.NavigationBar](dhtmlCommon.chm::/Classes/NavigationBar/NavigationBar.htm).


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


	- Выделите блок аналитической панели и выполните в консоли:


var navBarCheckBox = new PP.Ui.CheckBox({
    ParentNode: "checkBox",
    Content: "Параметры боковой панели",
    CheckedChanged: function () {
        kapBox.getNavBar().setIsVisible(navBarCheckBox.getChecked());

    }
});
var slidePanelCheckBox = new PP.Ui.CheckBox({
    ParentNode: "checkBox",
    Content: "Боковая панель",
    CheckedChanged: function () {
        kapBox.getSlidePanel().setIsVisible(slidePanelCheckBox.getChecked());
    }
});
var ribbonCheckBox = new PP.Ui.CheckBox({
    ParentNode: "checkBox",
    Content: "Лента инструментов",
    CheckedChanged: function () {
        kapBox.getRibbon().setIsVisible(ribbonCheckBox.getChecked());
    }
});

После выполнения примера будет добавлены флажки «Параметры
 боковой панели», «Боковая панель»
 и «Лента инструментов», при снятии/установке
 которых будут отображаться/скрываться соответствующие компоненты аналитической
 панели.


См. также:


[Dashboard](Dashboard.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
