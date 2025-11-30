# ParametersDimensionsView.getPropChangedObjects

ParametersDimensionsView.getPropChangedObjects
-


**


# ParametersDimensionsView.getPropChangedObjects


## Синтаксис


getPropChangedObjects();


## Описание


Метод getPropChangedObjects**
 возвращает изменения вкладки «Измерения» у диалога «Параметры».


## Комментарии


Метод возвращает объект класса [PP.Mb.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm),
 содержащий следующие свойства: PropertyName -
 наименование свойства в виде элемента перечисления PP.Exp.Ui.[ControlType](../../../Enums/PP.Exp.Ui.ControlType.htm),
 Metadata - метаданные, TypeUpdateData - массив типов обновляемых данных,
 Canceled - признак того, что изменения вкладки отменены.


## Пример


Пример использования приведен на странице описания метода [ParametersDataSource.getPropChangedObjects](../ParametersDataSource/ParametersDataSource.getPropChangedObjects.htm).


См. также:


[ParametersDimensionsView](ParametersDimensionsView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
