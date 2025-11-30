# IValidationFilterSettings.CellStyle

IValidationFilterSettings.CellStyle
-


# IValidationFilterSettings.CellStyle


## Синтаксис


CellStyle: [ILanerCellStyle](../ILanerCellStyle/ILanerCellStyle.htm);


## Описание


Свойство CellStyle возвращает
 стиль оформления для ячеек с исключениями валидации.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором TSDB, содержащей фильтр валидации с
 идентификатором NAMBCOMP_VALIDATION.


Добавьте ссылки на системные сборки: Drawing, Laner, Metabase, Ms, Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rubricator: IMetabaseObjectDescriptor;

	    valObj: IMetabaseObject;

	    valid: IValidationFilter;

	    Settings: IValidationFilterSettings;

	    Style: ILanerCellStyle;

	    TabStyle: ITabCellStyle;

	Begin

	    // Получаем репозиторий

	    MB := MetabaseClass.Active;

	    // Получаем базу данных временных рядов

	    Rubricator := MB.ItemById("TSDB");

	    // Получаем правило валидации

	    valObj := mb.ItemByIdNamespace("NAMBCOMP_VALIDATION", Rubricator.Key).Edit;

	    valid := valObj As IValidationFilter;

	    // Изменяем описание и наименование правила

	    valid.Description := "Изменили оформление исключений валидации";

	    valid.MetabaseObject.Name := "Измененное правило валидации";

	    // Получаем настройки валидации

	    Settings := valid.Settings;

	    // Изменяем уровень важности фильтра

	    Settings.Severity := ValidationSeverity.High;

	    // Получаем стиль оформления исключений валидации

	    Style := Settings.CellStyle;

	    TabStyle := Style.TabStyle;

	    // Изменяем цвет шрифта на фиолетовый

	    TabStyle.Font.Color := New GxColor.CreateRGB(162, 72, 163);

	    // Изменяем цвет фона ячеек на розовый

	    TabStyle.BackgroundBrush := New GxSolidBrush.Create(New GxColor.CreateRGB(250, 195, 197));

	    // Изменяем шрифт на «Arial»

	    TabStyle.Font.Name := "Arial";

	    valObj.Save;

	End Sub UserProc;


После выполнения примера будут изменены настройки фильтра валидации.
 После выполнения данного фильтра ячейки с исключениями валидации будут
 иметь розовый фон и фиолетовый шрифт.


См. также:


[IValidationFilterSettings](IValidationFilterSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
