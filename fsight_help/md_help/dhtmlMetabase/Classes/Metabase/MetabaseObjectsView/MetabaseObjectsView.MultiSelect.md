# MetabaseObjectsView.MultiSelect

MetabaseObjectsView.MultiSelect
-


# MetabaseObjectsView.MultiSelect


## Синтаксис


MultiSelect : Boolean;


## Описание


Свойство MultiSelect определяет
 возможность множественной отметки.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setMultiSelect,
 а возвращается с помощью метода getMultiSelect.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox.htm)
 с наименованием «navbox» (см. «[Пример
 создания компонента NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox_Example.htm)».


// Получим представление объектов
view = navbox.getObjectsView();
// Установим единичную отметку
view.setMultiSelect(false);
В результате выполнения примера был установлен режим единичной отметки.


См. также:


[MetabaseObjectsView](MetabaseObjectsView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
