# IMsFormulaTransformSlices.MoveTo

IMsFormulaTransformSlices.MoveTo
-


# IMsFormulaTransformSlices.MoveTo


## Синтаксис


MoveTo(FromIndex: Integer; ToIndex: Integer);


## Параметры


FromIndex. Индекс перемещаемого
 среза;


ToIndex. Индекс позиции коллекции,
 в которую необходимо переместить срез.


## Описание


Метод MoveTo выполняет перемещение
 среза в заданную позицию коллекции.


## Комментарии


Индексация срезов в коллекции сквозная и начинается с нуля. Значение
 параметра ToIndex должно быть
 меньше значения свойства [IMsFormulaTransformSlices.Count](IMsFormulaTransformSlices.Count.htm).


## Пример


Для выполнения примера предполагается наличие контейнера моделирования
 с идентификатором CONT_MODEL, содержащим многомерную модель с идентификатором
 OBJ. Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    mb: IMetabase;

    msKey: Integer;

    hModel: IMetabaseObjectDescriptor;

    g_oModel: IMsModel;

    transf: IMsFormulaTransform;

    oVar: IMsFormulaTransformVariable;

    sl: IMsFormulaTransformSlices;

Begin

    mb := metabaseClass.Active;

    msKey := mb.GetObjectKeyById("CONT_MODEL");

    hModel := mb.ItemByIdNamespace("OBJ15033", msKey);

    g_oModel := hModel.Edit As IMsModel;

    transf := g_oModel.Transform;

    oVar := transf.Inputs.Item(0);

    sl := oVar.Slices;

    sl.MoveTo(0, sl.Count - 1);

    (hModel As IMetabaseObject).Save;

End Sub Button1OnClick


После выполнения примера первый срез будет помещен в конец коллекции
 входной переменной. Остальные срезы будут сдвинуты к началу коллекции
 на одну позицию.


См. также:


[IMsFormulaTransformSlices](IMsFormulaTransformSlices.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
