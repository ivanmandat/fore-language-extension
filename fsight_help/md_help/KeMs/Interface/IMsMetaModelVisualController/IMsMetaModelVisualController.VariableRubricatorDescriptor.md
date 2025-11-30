# IMsMetaModelVisualController.VariableRubricatorDescriptor

IMsMetaModelVisualController.VariableRubricatorDescriptor
-


# IMsMetaModelVisualController.VariableRubricatorDescriptor


## Синтаксис


VariableRubricatorDescriptor: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство VariableRubricatorDescriptor возвращает описание внутренней БД временных рядов для метамодели.


## Комментарии


В метамодели присутствует внутренняя БД временных рядов, если [IMsMetaModelVisualController.HasVariableRubricator](IMsMetaModelVisualController.HasVariableRubricator.htm) = True.


## Пример


Для выполнения примера в репозитории должен присутствовать контейнер моделирования с идентификатором «MS», содержащий метамодель с идентификатором «META». Данная метамодель должна содержать внутреннюю БД временных рядов.


Добавьте ссылки на системные сборки «Metabase», «Ms», «Ui».


			Sub RubricatorDescriptor;

Var

    mb: IMetabase;

    MsObj: IMetabaseObjectDescriptor;

    Meta: IMsMetaModel;

    MetaVisual: IMsMetaModelVisualController;

    Target: IUiCommandTarget;

Begin

    mb := MetabaseClass.Active;

    MsObj := mb.ItemById("MS");

    Meta := mb.ItemByIdNamespace("META", MsObj.Key).Bind As IMsMetaModel;

    MetaVisual := Meta.VisualController;

    If MetaVisual.HasVariableRubricator Then

        Target := WinApplication.Instance.GetObjectTarget(MetaVisual.VariableRubricatorDescriptor);

        Target.Execute("Object.Open", Null);

    End If;

End Sub RubricatorDescriptor;


Результат выполнения примера: будет открыта внутренняя БД временных рядов для метамодели «META».


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
