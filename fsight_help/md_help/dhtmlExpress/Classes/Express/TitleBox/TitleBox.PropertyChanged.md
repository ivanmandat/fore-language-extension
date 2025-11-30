# TitleBox.PropertyChanged

TitleBox.PropertyChanged
-


**


# TitleBox.PropertyChanged


## Синтаксис


PropertyChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.
 Доступные аргументы - объект класса [PP.Mb.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm),
 содержащий следующие свойства: PropertyName -
 наименование свойства в виде элемента перечисления PP.Exp.Ui.[ControlType](../../../Enums/PP.Exp.Ui.ControlType.htm),
 Metadata - метаданные (MasterType - группа свойств в виде элемента перечисления
 PP.Exp.Ui.[PropertyGroups](../../../Enums/PropertyGroups.htm),
 ActiveItem - активный элемент управления в виде перечисления PP.Exp.Ui.[ControlType](../../../Enums/PP.Exp.Ui.ControlType.htm), options
 - настройки), TypeUpdateData - тип обновляемых данных, задаваемый с помощью
 перечисления PP.Exp.Ui.[ViewTypeUpdate](../../../Enums/ViewTypeUpdate.htm).


## Описание


Событие PropertyChanged**
 наступает после изменения значения свойства заголовка экспресс-отчета.


## Пример


Пример использования события приведен на странице описания свойства
 [TitleBox.getPropertyValue](TitleBox.getPropertyValue.htm).


См. также:


[TitleBox](TitleBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
