# IMsMetaModelVisualController.VariableRubricator

IMsMetaModelVisualController.VariableRubricator
-


# IMsMetaModelVisualController.VariableRubricator


## Синтаксис


VariableRubricator: [IRubricator](KeCubes.chm::/Interface/IRubricator/IRubricator.htm);


## Описание


Свойство VariableRubricator
 возвращает внутреннюю базу данных временных рядов для метамодели.


## Комментарии


В метамодели присутствует внутренняя БД временных рядов, если [IMsMetaModelVisualController.HasVariableRubricator](IMsMetaModelVisualController.HasVariableRubricator.htm) = True.


## Пример


Для выполнения примера предполагается наличие формы, содержащей кнопку
 «Button1». В репозитории должна присутствовать база данных временных рядов
 с идентификатором «FC», содержащая во внутреннем каталоге моделирования
 метамодель с идентификатором «META».


Добавьте ссылки на системные сборки «Metabase», «Ms», «Cubes», «Ui».


Пример является обработчиком события OnClick
 для кнопки.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    mb: IMetabase;

    Rub: IRubricator;

    Ms: IMetabaseObjectDescriptor;

    Meta: IMsMetaModel;

    MetaVisual: IMsMetaModelVisualController;

    Target: IUiCommandTarget;

Begin

    mb := MetabaseClass.Active;

    Rub := mb.ItemById("FC").Bind As IRubricator;

    Ms := Rub.ModelSpace;

    Meta := mb.ItemByIdNamespace("META", Ms.Key).Bind As IMsMetaModel;

    MetaVisual := Meta.VisualController;

    If MetaVisual.HasVariableRubricator Then

        Target := WinApplication.Instance.GetObjectTarget(MetaVisual.VariableRubricator As IMetabaseObjectDescriptor);

        Target.Execute("Object.Open", Null);

    End If;

End Sub Button1OnClick;


Результат выполнения примера: будет открыта внутренняя база данных временных
 рядов для метамодели «META» (если метамодель содержит внутреннюю БД временных
 рядов).


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
