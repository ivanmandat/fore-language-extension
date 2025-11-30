# IAdoMdCube.AutoRefresh

IAdoMdCube.AutoRefresh
-


# IAdoMdCube.AutoRefresh


## Синтаксис


AutoRefresh: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство AutoRefresh определяет,
 будет ли производиться автоматическое обновление структуры текущего куба.


## Комментарии


По умолчанию свойству установлено значение [TriState.Undefined](ForeSys.chm::/Enums/TriState.htm),
 при этом параметры автоматического обновления структуры зависят от настройки
 [IAdoMdCatalog.AutoRefresh](../IAdoMdCatalog/IAdoMdCatalog.AutoRefresh.htm),
 заданной для всего каталога. При необходимости с помощью свойства AutoRefresh для куба можно указать
 индивидуальный режим обновления структуры.


## Пример


Для выполнения примера предполагается наличие в репозитории каталога
 ADOMD с идентификатором «ADOMDTest». В каталоге имеется куб ADOMD с идентификатором
 «Cube_1».


			Sub UserProc;

Var

    MB: IMetabase;

    Cube: IAdoMdCube;

Begin

    MB := MetabaseClass.Active;

    Cube := MB.ItemByIdNamespace("Cube_1", MB.GetObjectKeyById("ADOMDTest")).Edit As IAdoMdCube;

    Cube.AutoRefresh := TriState.OnOption;

    (Cube As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера для указанного куба будет установлен режим автоматического
 обновления структуры.


См. также:


[IAdoMdCube](IAdoMdCube.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
