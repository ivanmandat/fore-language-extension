# EaxToolBarView.getItems

EaxToolBarView.getItems
-


**


# EaxToolBarView.getItems


## Синтаксис


getItems();


## Описание


Метод getItems** возвращает
 массив кнопок, используемых для переключения режима отображения данных.


## Комментарии


Метод возвращает массив объектов типа PP.Ui.[ToolBarButton](dhtmlUi.chm::/Classes/ToolBarButton/ToolBarButton.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Получим массив кнопок, используемых
 для переключения режима отображения данных, и обновим каждую из кнопок,
 выведя соответствующие сообщения:


// Получим представление группы кнопок для выбора режима отображения данных
var toolBar = expressBox.getDataView().getToolBarView();
// Получаем группу кнопок
var buttons = toolBar.getItems();
for(var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    // Обновляем полученную кнопку
    toolBar.refresh(button.getData());
    console.log("Кнопка «" + button.getContent() + "» обновлена." );
}

В результате выполнения примера были обновлены по-отдельности все кнопки
 из полученного массива, используемых для переключения режима отображения
 данных, а в консоль браузера выведены соответствующие уведомления:


Кнопка «Таблица» обновлена.

Кнопка «Диаграмма» обновлена.

Кнопка «Карта» обновлена.


См. также:


[EaxToolBarView](EaxToolBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
