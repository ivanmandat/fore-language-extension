# EaxDataView.refreshAll

EaxDataView.refreshAll
-


**


# EaxDataView.refreshAll


## Синтаксис


refreshAll();


## Описание


Метод refreshAll** обновляет всё содержимое рабочей области экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Далее обновим заголовок экспресс-отчета:


// Получаем представление контейнера для рабочей области экспресс-отчета
var dataView = expressBox.getDataView();
// Устанавливаем обработчик события Rendered
dataView.Rendered.add(function(){
    alert("Подготовлено к просмотру")
});
// Обновляем всё содержимое контейнера рабочей области экспресс-очтета
dataView.refreshAll();

В результате выполнения данного примера будет обновлено все содержимое рабочей области экспресс-отчета, после чего будет выведено окно с сообщением «Подготовлено к просмотру».


См. также:


[ EaxDataView](EaxDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
