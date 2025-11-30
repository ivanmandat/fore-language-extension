# IDefDrillDimension.DrillLevels

IDefDrillDimension.DrillLevels
-


# IDefDrillDimension.DrillLevels


## Синтаксис


		DrillLevels: [IDefDrillDimensionLevels](../IDefDrillDimensionLevels/IDefDrillDimensionLevels.htm);


## Описание


Свойство DrillLevels возвращает
 настройки расшифровки для уровней измерения.


## Пример


Для выполнения примера предполагается наличие двух форм ввода с идентификаторами
 DEF_ANALYTICS и DEF_DRILL. В форме ввода DEF_ANALYTICS создана табличная
 область данных, в боковике области данных имеется измерение, построенное
 на справочнике с идентификатором COMPANY. Справочник в своей структуре
 имеет несколько уровней. В форме ввода DEF_DRILL имеется параметр, который
 также основан на справочнике COMPANY.


Добавьте ссылки на системные сборки: Dimensions, Metabase. Также добавьте
 ссылки на сборки, которые [необходимы](../../Intro/DataEntryFormsCore_Intro.htm#link_assembly)
 для работы с формами ввода.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    DEF: IDataEntryForm;

		    TArea: IDefTableArea;

		    Dim: IDefDimension;

		    DrillLevel: IDefDrillDimensionLevel;

		    DrillParam: IDefDrillDimensionParameterValue;

		Begin

		    Mb := MetabaseClass.Active;

		    // Форма ввода/вывода

		    DEF := New DataEntryForm.CreateByDataEntryForm(Mb.ItemById("DEF_ANALYTICS"), True);

		    // Получение измерения

		    TArea := DEF.InputAreas.Item(0) As IDefTableArea;

		    Dim := TArea.DefDimensions.ItemByKey(Mb.GetObjectKeyById("COMPANY"));

		    // Настройка расшифровки для первого уровня измерения

		    DrillLevel := Dim.Drill.DrillLevels.Item(0);

		    DrillLevel.DrillDescriptor := Mb.ItemById("DEF_DRILL");

		    DrillLevel.CreateElement := True;

		    DrillLevel.RefreshAfterCreationClose := True;

		    DrillLevel.OpenOnSheetKey := 1;

		    DrillLevel.UserCaption := "Подробнее";

		    // Управление параметром

		    DrillParam := DrillLevel.ParameterValues.Item(0);

		    DrillParam.DrillType := emDrillType.attr;

		    DrillParam.Value := (Mb.Item(Dim.Key).Bind As IDimensionModel).Attributes.Id.Id;

		    // Применение изменений

		    DEF.InputAreas.ApplyAreaToReport(TArea.Id);

		    // Сохранение изменений

		    DEF.Save;

		    DEF._Dispose;

		End Sub UserProc;


В результате выполнения примера для первого уровня указанного измерения
 табличной области данных будет настроена расшифровка. Будут определены
 основные настройки расшифровки и настроено управление параметром открываемого
 объекта. При щелчке по какому-либо элементу измерения будет открыта форма
 ввода DEF_DRILL, в качестве значения для её параметра будет передаваться
 ключ элемента, для которого открывается расшифровка.


См. также:


[IDefDrillDimension](IDefDrillDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
