# EaxDataView.refresh

EaxDataView.refresh
-


**


# EaxDataView.refresh


## Синтаксис


refresh(objectType: PP.Exp.Ui.[EaxObjectType](../../../Enums/EaxObjectType.htm)|[PP.Mb.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm));


## Параметры


*objectType.* Тип объекта, который
 должен быть обновлён. Значение параметра задаются с помощью перечислений
 PP.Exp.Ui.[EaxObjectType](../../../Enums/EaxObjectType.htm)
 и PP.Mb.Ui.PropertyChangedEventArgs.


## Описание


Метод refresh** обновляет
 указанные элементы рабочей области экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Далее обновим заголовок экспресс-отчета:


// Получаем представление контейнера для рабочей области экспресс-отчета
var dataView = expressBox.getDataView();
// Получаем представление заголовка экспресс-отчета
var titleView = dataView.getTitleView();
// Устанавливаем обработчик события Refreshed
dataView.Refreshed.add(function(){
    alert("Обновлено")
});
// Обновляем заголовок экспресс-отчета
dataView.refresh(titleView);

В результате выполнения данного примера будет обновлен заголовок экспресс-отчета,
 после чего будет выведено окно с сообщением «Обновлено».


См. также:


[EaxDataView](EaxDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
