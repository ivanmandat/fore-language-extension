# ICompoundDimension.SaveCustomDependencies

ICompoundDimension.SaveCustomDependencies
-


# ICompoundDimension.SaveCustomDependencies


## Синтаксис


SaveCustomDependencies(Dependencies: [IMbElementDependencies](KeSom.chm::/Interface/IMbElementDependencies/IMbElementDependencies.htm);
 [ObjectKey: Integer = -1]);


## Параметры


Dependencies. Коллекция записей
 о зависимости объекта от элементов справочников НСИ.


ObjectKey. Ключ объекта.


## Описание


Метод SaveCustomDependencies
 сохраняет зависимости от элементов, использованных для построения составного
 справочника по измерению фактов куба.


## Комментарии


Источники построения составного справочника определяет свойство [ICompoundDimension.CustomContainer](ICompoundDimension.CustomContainer.htm).


Виртуальный куб вызывает данный метод при сохранении, если для куба
 отслеживается изменение элементов в справочниках НСИ.


## Пример


Для выполнения примера предполагается наличие виртуального куба с идентификатором
 «CUBE_VIRTUAL» (изменение элементов в справочниках НСИ не отслеживается).
 Добавьте ссылки на системные сборки «Metabase», «Cubes», «Dimensions».


			Sub UserProc;

Var

    mb: IMetabase;

    Obj: IMetabaseObject;

    cub: IVirtualCube;

    comp: ICompoundDimension;

    cust: ICustomDimension;

Begin

    mb := metabaseClass.Active;

    Obj := mb.ItemById("CUBE_VIRTUAL").Edit;

    cub := Obj As IVirtualCube;

    comp := cub.FactDimension As ICompoundDimension;

    cust := comp.CustomContainer;

    comp.SaveCustomDependencies(Obj.ElementDependencies);

    Obj.Save;

End Sub UserProc;


После выполнения примера будут сохранены зависимости от элементов, использованных
 для построения составного справочника по измерению фактов куба.


См. также:


[ICompoundDimension](ICompoundDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
