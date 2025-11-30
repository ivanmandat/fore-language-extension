# TabPaintFormat: Операция

TabPaintFormat: Операция
-


**


# TabPaintFormat


## Синтаксис


bool TabPaintFormat(TabSheetId tTabSheet, TabPaintFormatArgs
 tArg)


## Параметры


tTabSheet. Моникёр
 таблицы, в которой осуществляется вставка формата для диапазона ячеек.


tArg. Параметры выполнения
 операции.


## Описание


Операция TabPaintFormat копирует
 формат оформления одного диапазона ячеек в другой диапазон ячеек.


## Комментарии


Для выполнения операции укажите в поле tTabSheet
 моникёр таблицы, а в поле tArg
 параметры копирования формата оформления. Моникёр может быть сформирован
 на основании моникёра открытого экземпляра объекта, с таблицей которого
 осуществляется работа, по следующим правилам:


	- «Моникёр экземпляра экспресс-отчета»!Tab.
	 Таблица экспресс-отчета (если в экспресс-отчете один лист).


	- «Моникёр экземпляра экспресс-отчета»!Sheets!«Ключ
	 листа»!Tab. Таблица заданного листа экспресс-отчета (если в
	 экспресс-отчете несколько листов).


	- «Моникёр экземпляра рабочей
	 книги»!Tab. Таблица рабочей книги (если в рабочей книге один
	 лист).


	- «Моникёр экземпляра рабочей
	 книги»!Sheets!«Ключ листа»!Tab. Таблица заданного листа рабочей
	 книги (если в рабочей книги несколько листов).


	- «Моникёр экземпляра рабочей
	 книги»!CorrTab. Таблица с матрицей корреляции.


	- «Моникёр экземпляра рабочей
	 книги»!CoeffTab. Таблица с коэффициентами уравнения.


	- «Моникёр экземпляра рабочей
	 книги»!WeightsTab. Таблица с матрицей весов.


	- «Моникёр экземпляра регламентного
	 отчета»!Ключ листа. Таблица отдельного листа регламентного
	 отчета.


Результатом выполнения операции будет логическое значение true,
 если копирования формата завершилось успешно.


## Пример


Ниже приведён пример копирования формата одного диапазона в другой диапазон.
 Копирование осуществляется в рамках одного листа. В запросе передаётся
 моникёр таблицы, диапазон ячеек, из которого берётся формат оформления
 и диапазон ячеек, для которого применяется копия формата. В ответе возвращается
 признак успешного копирования формата ячеек.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<TabPaintFormat xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tTabSheet xmlns="****">
  <id>DJDINJDAHBDFGOAEJGMHIDGBBBECGIMEIKPHMNGNGOLDEPKK!M!S!PKDOKANDAHBDFGOAECAJHLMIOFHLOEMAELLJEFFONACLGHACB!1</id>  </tTabSheet>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<src>
  <left>0</left>  <top>0</top>  <width>2</width>  <height>2</height>  <type>Cells</type>  </src>
[![](../../../minus.gif)](../../../#)<dst>
  <left>4</left>  <top>0</top>  <width>2</width>  <height>2</height>  <type>Cells</type>  </dst>
  <k>1</k>  </tArg>
  </TabPaintFormat>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
  <TabPaintFormatResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</TabPaintFormatResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "TabPaintFormat" :
  {
   "tTabSheet" :
    {
     "id" : "DJDINJDAHBDFGOAEJGMHIDGBBBECGIMEIKPHMNGNGOLDEPKK!M!S!PKDOKANDAHBDFGOAECAJHLMIOFHLOEMAELLJEFFONACLGHACB!1"
    },
   "tArg" :
    {
     "src" :
      {
       "left" : "0",
       "top" : "0",
       "width" : "2",
       "height" : "2",
       "type" : "Cells"
      },
     "dst" :
      {
       "left" : "4",
       "top" : "0",
       "width" : "2",
       "height" : "2",
       "type" : "Cells"
      },
     "k" : "1"
    }
  }
}

### JSON-ответ:


{
 "TabPaintFormatResult" : "1"
}


public static bool TabPaintFormat(string moniker, uint sheetKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tFormat = new TabPaintFormat()
    {
        tArg = new TabPaintFormatArgs()
        {
            src = new TabComplexRange()
            {
                left = 0,
                top = 0,
                width = 2,
                height = 2,
                type = TabRangeType.Cells
            },
            dst = new TabComplexRange()
            {
                left = 4,
                top = 0,
                width = 2,
                height = 2,
                type = TabRangeType.Cells
            },
            k = sheetKey
        },
        tTabSheet = new TabSheetId() { id = moniker + "!" + sheetKey }
    };
    // Копирование формата оформления одного диапазона ячеек в другой диапазон ячеек
    var result = somClient.TabPaintFormat(tFormat);
    return result;
}


См. также:


[Таблица:
 Операции](tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
