# ICompoundDimension.InitCustomContainer

ICompoundDimension.InitCustomContainer
-


# ICompoundDimension.InitCustomContainer


## Синтаксис


InitCustomContainer;


## Описание


Метод InitCustomContainer обновляет
 или создает измерение фактов на основе [виртуального
 куба](UiNavObj.chm::/Cube/CreateCube/Master_Virtual_Cube/UiMd_Cube_CreateCube_Master_Virtual.htm).


## Комментарии


Данный метод обновляет или создает атрибуты измерения, заданного свойством
 [ICompoundDimension.CustomContainer](ICompoundDimension.CustomContainer.htm).
 Если в этом свойстве значение пустое, то в репозитории среди дочерних
 объектов владельца (виртуальный куб) данного измерения ищется объект класса
 KE_CLASS_CUSTOMDIMENSION с признаком [IsInternal](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.IsInternal.htm)
 и идентификатором FACTS. Если такой объект найден, то он используется,
 иначе создается и используется новый объект — [ICustomDimension](../ICustomDimension/ICustomDimension.htm),
 у которого структура (владелец, идентификатор, признак [IsInternal](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.IsInternal.htm))
 задается по правилам, указанным для поиска выше.


Созданное измерение фактов можно использовать в качестве [альтернативной
 иерархии](UiSelection.chm::/Selection/Hierarchies.htm).


Данный метод актуален для корректной работы виртуального куба, если
 в схеме есть привязка к структуре измерения фактов виртуального куба.


Примеры привязки к структуре измерения фактов:


	- редактировался состав атрибутов измерения фактов;


	- атрибуты измерения фактов используются в формулах
	 отчетов.


Примечание.
 При использовании данного метода обновляется или создается только структура
 измерения фактов. Формирование дерева элементов необходимо проводить отдельно.


## Пример


Для выполнения примера необходимо наличие в репозитории виртуального
 куба с идентификатором «V_CUBE».


Добавьте ссылки на системные сборки: Metabase, Dimensions, Cubes, Dal.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    CubV: IVirtualCube;

    CompDim: ICompoundDimension;

    CustDim: ICustomDimension;

    i: Integer;

    Function TypeString(CustDim: ICustomDimension; i: Integer): String;

    Var

        c: String;

    Begin

        Select Case CustDim.Attributes.Item(i).DataType.ToString

        Case "1": c := "String";

        Case "2": c := "Integer";

        Case "3": c := "Float";

        Case "4": c := "DataTime";

        End Select;

        Return c;

    End Function TypeString;

Begin

    MB := MetabaseClass.Active;

    Mobj := MB.ItemById("V_CUBE").Edit;

    CubV := Mobj As IVirtualCube;

    CompDim := CubV.FactDimension As ICompoundDimension;

    CompDim.InitCustomContainer;

    CustDim := CompDim.CustomContainer;

    Debug.WriteLine("№    Идентификатор    Наименование   Tип атрибута");

    For i:=0 To CustDim.Attributes.Count-1 Do

        Debug.WriteLine(i.ToString + "    " + CustDim.Attributes.Item(i).Id + "     " + CustDim.Attributes.Item(i).Name + "       " + TypeString(CustDim,i))

    End For;

    MObj.Save;

End Sub UserProc;


В результате выполнения примера для виртуального куба будет создано
 измерение фактов. В консоль будет выведен идентификатор, наименование
 и тип для всех атрибутов измерения фактов.


См. также:


[ICompoundDimension](ICompoundDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
