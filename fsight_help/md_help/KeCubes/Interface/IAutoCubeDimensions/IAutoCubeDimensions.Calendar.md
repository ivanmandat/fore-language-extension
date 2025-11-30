# IAutoCubeDimensions.Calendar

IAutoCubeDimensions.Calendar
-


# IAutoCubeDimensions.Calendar


## Синтаксис


Calendar: [IAutoCubeDimension](../IAutoCubeDimension/IAutoCubeDimension.htm);


## Описание


Свойство Calendar возвращает
 календарное измерение автоматического куба.


## Пример


Для выполнения примера предполагается наличие в репозитории автоматического
 куба с идентификатором AUTO_CUBE.


			Sub UserProc;

Var

    MB: IMetabase;

    AutoCube: IAutoCube;

    CalDim: IAutoCubeDimension;

Begin

    MB := MetabaseClass.Active;

    AutoCube := MB.ItemById("AUTO_CUBE").Bind As IAutoCube;

    CalDim := AutoCube.Dimensions.Calendar;

    Debug.WriteLine((CalDim.Dimension As IMetabaseObjectDescriptor).Id);

End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведен идентификатор
 справочника, являющегося календарным измерением в автоматическом кубе.


См. также:


[IAutoCubeDimensions](IAutoCubeDimensions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
