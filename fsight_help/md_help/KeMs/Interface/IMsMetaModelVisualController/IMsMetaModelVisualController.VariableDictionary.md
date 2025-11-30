# IMsMetaModelVisualController.VariableDictionary

IMsMetaModelVisualController.VariableDictionary
-


# IMsMetaModelVisualController.VariableDictionary


## Синтаксис


VariableDictionary: [IRdsDictionary](KeRds.chm::/Interface/IRdsDictionary/IRdsDictionary.htm);


## Описание


Свойство VariableDictionary возвращает справочник, содержащий информацию о внутренних переменных метамодели.


## Комментарии


Внутреннюю базу данных временных рядов для метамодели возвращает свойство [IMsMetaModelVisualController.VariableRubricator](IMsMetaModelVisualController.VariableRubricator.htm).


## Пример


Для выполнения примера в репозитории должен присутствовать контейнер моделирования с идентификатором «MS», содержащий метамодель с идентификатором «META». Данная метамодель должна содержать внутреннюю БД временных рядов.


Добавьте ссылки на системные сборки «Metabase», «Ms», «Ui».


			Sub VariableDictionary;

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

        Target := WinApplication.Instance.GetObjectTarget(MetaVisual.VariableDictionary As IMetabaseObjectDescriptor);

        Target.Execute("Object.Open", Null);

    End If;

End Sub VariableDictionary;


Результат выполнения примера: будет открыт справочник, содержащий информацию о внутренних переменных метамодели «META».


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
