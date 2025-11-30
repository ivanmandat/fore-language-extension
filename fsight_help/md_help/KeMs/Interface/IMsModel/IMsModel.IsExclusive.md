# IMsModel.IsExclusive

IMsModel.IsExclusive
-


# IMsModel.IsExclusive


## Синтаксис


IsExclusive: Boolean;


## Описание


Свойство IsExclusive
 возвращает признак того, является ли модель внутренней для цепочки расчета.


## Комментарии


True
 - модель является внутренней, False
 - модель является внешней.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором CONT_M. В контейнере присутствует модель
 с идентификатором MODEL.


			Sub UserProc;

Var

    mb: IMetabase;

    pModelSpace: IMetabaseObjectDescriptor;

    Model: IMsModel;

Begin

    mb := MetabaseClass.Active;

    pModelSpace := mb.ItemById("CONT_M");

    Model := mb.ItemByIdNamespace("MODEL", pModelSpace.Key).Bind As IMsModel;

    If Model.IsExclusive

        Then Debug.WriteLine((Model As IMetabaseObject).Name + " - внутренняя модель");

        Else Debug.WriteLine((Model As IMetabaseObject).Name + " - внешняя модель");

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация о
 виде модели: внутренняя или внешняя.


См. также:


[IMsModel](IMsModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
