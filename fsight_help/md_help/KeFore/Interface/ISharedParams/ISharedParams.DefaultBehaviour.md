# ISharedParams.DefaultBehaviour

ISharedParams.DefaultBehaviour
-


# ISharedParams.DefaultBehaviour


## Синтаксис


DefaultBehaviour: [IDefaultBehaviour](../IDefaultBehaviour/IDefaultBehaviour.htm);


## Описание


Свойство DefaultBehaviour возвращает
 объект для работы с [настройками
 по умолчанию](UiNav.chm::/02_Navigator/Repo_Default.htm).


## Пример


Для выполнения примера добавьте ссылки на системные сборки Fore, Metabase;


			Sub UserProc;

Var

    Mb: IMetabase;

    SP: ISharedParams;

    DB: IDefaultBehaviour;

Begin

    // Получим текущий репозиторий

    Mb := MetabaseClass.Active;

    // Установим табличный тип отображения карточки элемента в настройках по умолчанию

    SP := Mb.SpecialObject(MetabaseSpecialObject.SharedParams).Edit As ISharedParams;

    //Зададим настройки по умолчанию

    DB := SP.DefaultBehaviour;

    // Установим табличный тип отображения карточки элемента в настройках по умолчанию

    DB.RDSElementCard := RdsElementCardStyle.PropertyList;

    // Установим табличный тип отображения карточки элемента в настройках по умолчанию

    DB.TreatEmptySelectionAsFull := True;

    (SP As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера в [настройках по умолчанию](UiNav.chm::/02_Navigator/Repo_Default.htm) будут установлены табличный тип отображения карточки элемента
 справочника НСИ и флажок «Рассматривать
 пустую отметку как полную» на вкладке «Поведение».


См. также:


[ISharedParams](ISharedParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
