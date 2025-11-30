# ResizeTabObjects: Операция

ResizeTabObjects: Операция
-


**


# ResizeTabObjects


## Синтаксис


bool ResizeTabObjects(TabSheetId tTabSheet, TabObjectMoveArg
 tArg)


## Параметры


tTabSheet. Моникёр
 листа.


tArg. Параметры выполнения
 операции.


## Описание


Операция ResizeTabObjects изменяет
 размеры объектов таблицы.


## Комментарии


Для выполнения операции укажите в поле tTabSheet
 моникёр листа, на котором расположены объекты, а в поле tArg
 параметры изменения размеров объектов. Моникёр может быть сформирован
 на основании моникёра открытого экземпляра объекта, с которым осуществляется
 работа.


Результатом выполнения операции будет логическое значение true,
 если изменение размеров объектов завершилось успешно.


## Пример


Ниже приведён пример изменения размеров диаграммы, расположенной на
 листе таблицы. В запросе передаётся моникёр листа и устанавливаемые размеры
 диаграммы. В ответе возвращается признак успешного изменения размеров.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<ResizeTabObjects xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tTabSheet xmlns="****">
  <id>GELCPBJDAHMNFOAEOGANNOOIMCBDPMLEFKAFDIFHOKGGDEFD!M!S!PLBMFNEJDAHMNFOAEKCMNMAJAJPHAFBGEILMEHGGEFPOMHMFJ!Sheets!1</id>  </tTabSheet>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <id>PrxChart1</id>[![](../../../minus.gif)](../../../#)<mm>
[![](../../../minus.gif)](../../../#)<lt>
  <x>70</x>  <y>70</y>  </lt>
[![](../../../minus.gif)](../../../#)<sz>
  <width>50</width>  <height>50</height>  </sz>
  </mm>
  </it>
  </its>
  </tArg>
  </ResizeTabObjects>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
  <ResizeTabObjectsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</ResizeTabObjectsResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "ResizeTabObjects" :
  {
   "tTabSheet" :
    {
     "id" : "GELCPBJDAHMNFOAEOGANNOOIMCBDPMLEFKAFDIFHOKGGDEFD!M!S!PLBMFNEJDAHMNFOAEKCMNMAJAJPHAFBGEILMEHGGEFPOMHMFJ!Sheets!1"
    },
   "tArg" :
    {
     "its" :
      {
       "it" :
        [
          {
           "id" : "PrxChart1",
           "mm" :
            {
             "lt" :
              {
               "x" : "70",
               "y" : "70"
              },
             "sz" :
              {
               "width" : "50",
               "height" : "50"
              }
            }
          }
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "ResizeTabObjectsResult" : "1"
}


public static bool ResizeTabObjects(string reportMoniker, string sheetKey, string objectId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tSet = new ResizeTabObjects()
    {
        tArg = new TabObjectMoveArg()
        {
            its = new TabObjectMoveItem[]
            {
                new TabObjectMoveItem()
                {
                    id = objectId,
                    mm = new TabObjectCoordsMm()
                    {
                        lt = new PointF(){ x = 70, y = 70 },
                        sz = new SizeF(){ height = 50, width = 50 }
                    }
                }
            }
        },
        tTabSheet = new TabSheetId() { id = reportMoniker + "!Sheets!" + sheetKey}
    };
    // Изменение размеров объекта таблицы
    var result = somClient.ResizeTabObjects(tSet);
    return result;
}


См. также:


[Таблица:
 Операции](tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
