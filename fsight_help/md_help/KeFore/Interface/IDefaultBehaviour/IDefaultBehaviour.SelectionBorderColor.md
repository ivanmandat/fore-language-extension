# IDefaultBehaviour.SelectionBorderColor

IDefaultBehaviour.SelectionBorderColor
-


# IDefaultBehaviour.SelectionBorderColor


## Синтаксис


SelectionBorderColor: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство SelectionBorderColor
 определяет цвет границы выделения ячеек.


## Пример


Добавьте ссылки на системные сборки: Drawing, Fore, Metabase.


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

    // Настройки оформления в отчётах

    DB.SelectionBorderColor := GxColor.FromKnownColor(GxKnownColor.OliveDrab);

    DB.SelectionColor := New GxColor.CreateARGB(65, 50, 88, 201);

    // Сохранение изменений

    (SP As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера в настройках репозитория по умолчанию будет изменено
 оформление, используемое в отчётах.


См. также:


[IDefaultBehaviour](IDefaultBehaviour.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
