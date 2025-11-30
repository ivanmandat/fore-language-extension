# IDefaultBehaviour.RDSElementCard

IDefaultBehaviour.RDSElementCard
-


# IDefaultBehaviour.RDSElementCard


## Синтаксис


RDSElementCard: [RdsElementCardStyle](ForeSys.chm::/Enums/RdsElementCardStyle.htm);


## Описание


Свойство RDSElementCard предоставляет
 возможность выбора вида карточки элемента справочника НСИ.


## Комментарии


По умолчанию используется значение RdsElementCardStyle.Standart.


## Пример


Добавьте ссылки на системные сборки: Fore, Metabase.


			Sub UserProc;

Var

    Mb: IMetabase;

    SP: ISharedParams;

Begin

    // Получим текущий репозиторий

    Mb := MetabaseClass.Active;

    // Установим табличный тип отображения карточки элемента
 справочника НСИ в настройках по умолчанию

    SP := Mb.SpecialObject(MetabaseSpecialObject.SharedParams).Edit As ISharedParams;

    SP.DefaultBehaviour.RDSElementCard := RdsElementCardStyle.PropertyList;

    (SP As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера в [настройках по умолчанию](UiNav.chm::/02_Navigator/Repo_Default.htm) будет установлен табличный тип отображения карточки элемента
 справочника НСИ.


См. также:


[IDefaultBehaviour](IDefaultBehaviour.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
