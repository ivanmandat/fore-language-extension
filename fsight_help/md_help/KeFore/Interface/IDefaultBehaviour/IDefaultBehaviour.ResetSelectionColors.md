# IDefaultBehaviour.ResetSelectionColors

IDefaultBehaviour.ResetSelectionColors
-


# IDefaultBehaviour.ResetSelectionColors


## Синтаксис


ResetSelectionColors;


## Описание


Метод ResetSelectionColors сбрасывает
 настройки оформления в отчётах и устанавливает значения настроек по умолчанию.


## Пример


Добавьте ссылки на системные сборки: Fore, Metabase.


			Sub UserProc;

Var

    Mb: IMetabase;

    SP: ISharedParams;

    DB: IDefaultBehaviour;

Begin

    // Текущий репозиторий

    Mb := MetabaseClass.Active;

    SP := Mb.SpecialObject(MetabaseSpecialObject.SharedParams).Edit As ISharedParams;

    // Настройки по умолчанию

    DB := SP.DefaultBehaviour;

    // Если изменены настройки оформления в отчётах, то сброс этих настроек

    If Not DB.IsSelectionColorDefault Then

        DB.ResetSelectionColors;

    End If;

    // Сохранение изменений

    (SP As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера будет осуществлена проверка наличия изменений
 в настройках оформления, заданного в настройках репозитория по умолчанию.
 Если настройки изменены, то они будут сброшены.


См. также:


[IDefaultBehaviour](IDefaultBehaviour.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
