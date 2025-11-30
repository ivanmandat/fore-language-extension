# IRegistryKey

IRegistryKey
-


# IRegistryKey


Сборка: Registry;


## Описание


Интерфейс IRegistryKey содержит
 свойства и методы для работы с объектами раздела реестра.


## Иерархия наследования


           IRegistryKey


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Name](IRegistryKey.Name.htm)
		 Свойство Name возвращает
		 наименование раздела реестра.


		 ![](../../Property_Image.gif)
		 [SubKeyCount](IRegistryKey.SubKeyCount.htm)
		 Свойство SubKeyCount
		 возвращает количество подразделов для текущего раздела реестра.


		 ![](../../Property_Image.gif)
		 [ValueCount](IRegistryKey.ValueCount.htm)
		 Свойство ValueCount
		 возвращает количество параметров в подразделе реестра.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateSubKey](IRegistryKey.CreateSubKey.htm)
		 Метод CreateSubKey
		 осуществляет создание подраздела в реестре.


		 ![](../../Sub_Image.gif)
		 [DeleteSubKey](IRegistryKey.DeleteSubKey.htm)
		 Метод DeleteSubKey
		 осуществляет удаление подраздела в реестре.


		 ![](../../Sub_Image.gif)
		 [DeleteValue](IRegistryKey.DeleteValue.htm)
		 Метод DeleteValue осуществляет
		 удаление параметра в подразделе реестра.


		 ![](../../Sub_Image.gif)
		 [Flush](IRegistryKey.Flush.htm)
		 Метод Flush осуществляет
		 запись всех атрибутов заданного открытого подраздела реестра на
		 диск.


		 ![](../../Sub_Image.gif)
		 [GetSubKeyNames](IRegistryKey.GetSubKeyNames.htm)
		 Метод GetSubKeyNames
		 возвращает коллекцию наименований подразделов данного раздела
		 реестра.


		 ![](../../Sub_Image.gif)
		 [GetValueNames](IRegistryKey.GetValueNames.htm)
		 Метод GetValueNames
		 возвращает коллекцию наименований параметров подраздела реестра.


		 ![](../../Sub_Image.gif)
		 [OpenSubKey](IRegistryKey.OpenSubKey.htm)
		 Метод OpenSubKey открывает
		 подраздел реестра.


		 ![](../../Sub_Image.gif)
		 [ReadBoolean](IRegistryKey.ReadBoolean.htm)
		 Метод ReadBoolean осуществляет
		 считывание логического значения из параметра типа REG_DWORD в
		 реестре без проверки параметра на наличие.


		 ![](../../Sub_Image.gif)
		 [ReadBooleanDef](IRegistryKey.ReadBooleanDef.htm)
		 Метод ReadBooleanDef
		 осуществляет считывание логического значения из параметра типа
		 REG_DWORD в реестре.


		 ![](../../Sub_Image.gif)
		 [ReadDateTime](IRegistryKey.ReadDateTime.htm)
		 Метод ReadDateTime
		 осуществляет считывание даты и времени из двоичного параметра
		 в реестре без проверки параметра на наличие.


		 ![](../../Sub_Image.gif)
		 [ReadDateTimeDef](IRegistryKey.ReadDateTimeDef.htm)
		 Метод ReadDateTimeDef
		 осуществляет считывание даты и времени из двоичного параметра
		 в реестре.


		 ![](../../Sub_Image.gif)
		 [ReadDouble](IRegistryKey.ReadDouble.htm)
		 Метод ReadDouble осуществляет
		 считывание вещественного значения из двоичного параметра в реестре
		 без проверки параметра на наличие.


		 ![](../../Sub_Image.gif)
		 [ReadDoubleDef](IRegistryKey.ReadDoubleDef.htm)
		 Метод ReadDoubleDef
		 осуществляет считывание вещественного значения из двоичного параметра
		 в реестре.


		 ![](../../Sub_Image.gif)
		 [ReadInteger](IRegistryKey.ReadInteger.htm)
		 Метод ReadInteger осуществляет
		 считывание целочисленного значения из параметра типа REG_DWORD
		 в реестре без проверки параметра на наличие.


		 ![](../../Sub_Image.gif)
		 [ReadIntegerDef](IRegistryKey.ReadIntegerDef.htm)
		 Метод ReadIntegerDef
		 осуществляет считывание целочисленного значения из параметра типа
		 REG_DWORD в реестре.


		 ![](../../Sub_Image.gif)
		 [ReadString](IRegistryKey.ReadString.htm)
		 Метод ReadString осуществляет
		 считывание символьного значения из строкового параметра в реестре
		 без проверки параметра на наличие.


		 ![](../../Sub_Image.gif)
		 [ReadStringDef](IRegistryKey.ReadStringDef.htm)
		 Метод ReadStringDef
		 осуществляет считывание символьного значения из строкового параметра
		 в реестре.


		 ![](../../Sub_Image.gif)
		 [ReadVariant](IRegistryKey.ReadVariant.htm)
		 Метод ReadVariant осуществляет
		 считывание значения формата Variant из строкового параметра в
		 реестре без проверки параметра на наличие.


		 ![](../../Sub_Image.gif)
		 [ReadVariantDef](IRegistryKey.ReadVariantDef.htm)
		 Метод ReadVariantDef
		 осуществляет считывание значения в формате Variant из строкового
		 параметра в реестре.


		 ![](../../Sub_Image.gif)
		 [SubKeyExists](IRegistryKey.SubKeyExists.htm)
		 Метод SubKeyExists
		 осуществляет проверку наличия подраздела в реестре.


		 ![](../../Sub_Image.gif)
		 [ValueExists](IRegistryKey.ValueExists.htm)
		 Метод ValueExists осуществляет
		 проверку наличия параметра в подразделе реестра.


		 ![](../../Sub_Image.gif)
		 [WriteBoolean](IRegistryKey.WriteBoolean.htm)
		 Метод WriteBoolean
		 осуществляет изменение значения логического параметра.


		 ![](../../Sub_Image.gif)
		 [WriteDateTime](IRegistryKey.WriteDateTime.htm)
		 Метод WriteDateTime
		 осуществляет изменение значения параметра, содержащего дату и
		 время.


		 ![](../../Sub_Image.gif)
		 [WriteDouble](IRegistryKey.WriteDouble.htm)
		 Метод WriteDouble осуществляет
		 изменение значения параметра, содержащего вещественные числа.


		 ![](../../Sub_Image.gif)
		 [WriteInteger](IRegistryKey.WriteInteger.htm)
		 Метод WriteInteger
		 осуществляет изменение значения параметра, содержащего целые числа.


		 ![](../../Sub_Image.gif)
		 [WriteString](IRegistryKey.WriteString.htm)
		 Метод WriteString осуществляет
		 изменение значения строкового параметра.


		 ![](../../Sub_Image.gif)
		 [WriteVariant](IRegistryKey.WriteVariant.htm)
		 Метод WriteVariant
		 осуществляет изменение значения параметра типа Variant.


См.также:


[Интерфейсы сборки Registry](../Registry_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
