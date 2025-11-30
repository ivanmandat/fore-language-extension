# IEaxDataAreaSlice.GenerateDimensionParams

IEaxDataAreaSlice.GenerateDimensionParams
-


# IEaxDataAreaSlice.GenerateDimensionParams


## Синтаксис


GenerateDimensionParams: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство GenerateDimensionParams определяет,
 будет ли использоваться автоматическая генерация параметров измерений
 для среза данных.


## Комментарии


Назначение и принцип работы свойства такой же, как у свойства [IEaxDataArea.GenerateDimensionParams](../IEaxDataArea/IEaxDataArea.GenerateDimensionParams.htm),
 но распространяется только на текущий срез данных.


Если текущему свойству GenerateDimensionParams установлено
 значение [TriState.Undefined](ForeSys.chm::/Enums/TriState.htm),
 то значение будет браться из [IEaxDataArea.GenerateDimensionParams](../IEaxDataArea/IEaxDataArea.GenerateDimensionParams.htm).


См. также:


[IEaxDataAreaSlice](IEaxDataAreaSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
