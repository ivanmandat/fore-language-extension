# GetDataAreaGridDimRanges: Операция

GetDataAreaGridDimRanges: Операция
-


**


# GetDataAreaGridDimRanges


## Синтаксис


DataAreaGridDimRanges GetDataAreaGridDimRanges(string
 mon, DataAreaGridDimRanges tArg)


## Параметры


mon. Моникёр
 визуализатора Таблица.


tArg. Параметры диапазонов
 ячеек, которые необходимо получить.


## Описание


Операция GetDataAreaGridDimRanges
 получает информацию о диапазонах ячеек, соответствующих измерениям в шапке
 и боковике.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources!«ключ
 источника»!DataSourceSlices!«ключ среза»!Views!«ключ таблицы».
 Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).
 В поле tArg задайте пустые значения
 или значения по умолчанию для тех полей, значения которых необходимо получить.


Операция вернёт полученную информацию о диапазонах ячеек.


## Пример


Ниже приведён пример получения информации о диапазонах ячеек, в которых
 расположены элементы измерений. В запросе передаётся моникёр таблицы.
 В ответе приходят полученная информация о диапазонах.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDataAreaGridDimRanges xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">GLCLGKOCBPDOFOAEENFEDILEMKNEILDEEJBICAEDMGPNBJLP!M!S!PIKDEKAPCBPDOFOAEIFJLGPOHDBHHIAFEFIDCDPHPDEAMFAID!DataArea!DataSources!1!DataSourceSlices!1!Views!6</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<dimKey>
  <dimKey>-1</dimKey>  </dimKey>
  </it>
  </its>
  </tArg>
  </GetDataAreaGridDimRanges>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDataAreaGridDimRangesResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<its xmlns="****">
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<dimKey>
  <dimKey>5858</dimKey>  </dimKey>
[![](../../minus.gif)](../../#)<range>
  <left>0</left>  <top>0</top>  <width>0</width>  <height>0</height>  <type>None</type>  </range>
  </it>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<dimKey>
  <dimKey>112</dimKey>  </dimKey>
[![](../../minus.gif)](../../#)<range>
  <left>2</left>  <top>1</top>  <width>2</width>  <height>1</height>  <type>MultiPart</type>  <address>C1:D1</address>[![](../../minus.gif)](../../#)<parts>
[![](../../minus.gif)](../../#)<it>
  <left>2</left>  <top>1</top>  <width>2</width>  <height>1</height>  <type>Cells</type>  <address>C1:D1</address>  </it>
  </parts>
  </range>
  </it>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<dimKey>
  <dimKey>116</dimKey>  </dimKey>
[![](../../minus.gif)](../../#)<range>
  <left>1</left>  <top>2</top>  <width>1</width>  <height>2</height>  <type>MultiPart</type>  <address>B2:B3</address>[![](../../minus.gif)](../../#)<parts>
[![](../../minus.gif)](../../#)<it>
  <left>1</left>  <top>2</top>  <width>1</width>  <height>2</height>  <type>Cells</type>  <address>B2:B3</address>  </it>
  </parts>
  </range>
  </it>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<dimKey>
  <dimKey>991</dimKey>  </dimKey>
[![](../../minus.gif)](../../#)<range>
  <left>0</left>  <top>0</top>  <width>0</width>  <height>0</height>  <type>None</type>  </range>
  </it>
  </its>
  </GetDataAreaGridDimRangesResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDataAreaGridDimRanges" :
  {
   "mon" : "GLCLGKOCBPDOFOAEENFEDILEMKNEILDEEJBICAEDMGPNBJLP!M!S!PIKDEKAPCBPDOFOAEIFJLGPOHDBHHIAFEFIDCDPHPDEAMFAID!DataArea!DataSources!1!DataSourceSlices!1!Views!6",
   "tArg" :
    {
     "its" :
      {
       "it" :
        [
          {
           "dimKey" :
            {
             "dimKey" : "-1"
            }
          }
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "GetDataAreaGridDimRangesResult" :
  {
   "its" :
    {
     "it" :
      [
        {
         "dimKey" :
          {
           "dimKey" : "5858"
          },
         "range" :
          {
           "left" : "0",
           "top" : "0",
           "width" : "0",
           "height" : "0",
           "type" : "None"
          }
        },
        {
         "dimKey" :
          {
           "dimKey" : "112"
          },
         "range" :
          {
           "left" : "2",
           "top" : "1",
           "width" : "2",
           "height" : "1",
           "type" : "MultiPart",
           "address" : "C1:D1",
           "parts" :
            {
             "it" :
              {
               "left" : "2",
               "top" : "1",
               "width" : "2",
               "height" : "1",
               "type" : "Cells",
               "address" : "C1:D1"
              }
            }
          }
        },
        {
         "dimKey" :
          {
           "dimKey" : "116"
          },
         "range" :
          {
           "left" : "1",
           "top" : "2",
           "width" : "1",
           "height" : "2",
           "type" : "MultiPart",
           "address" : "B2:B3",
           "parts" :
            {
             "it" :
              {
               "left" : "1",
               "top" : "2",
               "width" : "1",
               "height" : "2",
               "type" : "Cells",
               "address" : "B2:B3"
              }
            }
          }
        },
        {
         "dimKey" :
          {
           "dimKey" : "991"
          },
         "range" :
          {
           "left" : "0",
           "top" : "0",
           "width" : "0",
           "height" : "0",
           "type" : "None"
          }
        }
      ]
    }
  }
}


public static DataAreaGridDimRanges GetDataAreaGridDimRanges(string moniker, uint sourceKey, uint sliceKey, uint viewKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetDataAreaGridDimRanges()
    {
        tArg = new DataAreaGridDimRanges()
        {
            its = new DataAreaGridDimRange[]
            {
                new DataAreaGridDimRange()
                {
                    dimKey = new DataAreaGridDimIdent() { dimKey = uint.MaxValue }
                }
            }
        },
        mon = moniker + "!DataArea!DataSources!" + sourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Views!" + viewKey.ToString()
    };
    // Получение информации о диапазонах измерений
    var result = somClient.GetDataAreaGridDimRanges(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
