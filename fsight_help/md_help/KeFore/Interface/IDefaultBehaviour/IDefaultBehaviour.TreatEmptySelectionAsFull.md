# IDefaultBehaviour.TreatEmptySelectionAsFull

IDefaultBehaviour.TreatEmptySelectionAsFull
-


# IDefaultBehaviour.TreatEmptySelectionAsFull


## Синтаксис


TreatEmptySelectionAsFull: Boolean;


## Описание


Свойство TreatEmptySelectionAsFull
 предоставляет возможность рассматривать [пустую отметку
 как полную](UiNav.chm::/02_Navigator/Repo_Default.htm#behavior) при настройке поведения, которое
 будет использоваться в инструментах продукта «Форсайт. Аналитическая платформа».


## Комментарии


Допустимые значения:


	- True. Разрешено рассматривать
	 пустую отметку как полную;


	- False. Запрещено рассматривать
	 пустую отметку как полную.


По умолчанию используется значение False.


Свойство TreatEmptySelectionAsFull
 управляет состоянием флажка «[Рассматривать
 пустую отметку как полную](UiNav.chm::/02_Navigator/Repo_Default.htm#behavior)» на вкладке «Поведение».


## Пример


Для выполнения примера добавьте ссылки на системные сборки: Fore, Metabase;


			Sub UserProc;

Var

    Mb: IMetabase;

    SP: ISharedParams;

Begin

    // Получим текущий репозиторий

    Mb := MetabaseClass.Active;

    // Установим возможность
 рассматривать пустую отметку как полную

    SP := Mb.SpecialObject(MetabaseSpecialObject.SharedParams).Edit As ISharedParams;

    SP.DefaultBehaviour.TreatEmptySelectionAsFull := True;

    (SP As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера в [настройках по умолчанию](UiNav.chm::/02_Navigator/Repo_Default.htm) будет установлен флажок «Рассматривать
 пустую отметку как полную» на вкладке «Поведение».


См. также:


[IDefaultBehaviour](IDefaultBehaviour.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
