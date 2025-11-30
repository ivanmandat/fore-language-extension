# TabSheetPageBreaks: Операция

TabSheetPageBreaks: Операция
-


**


# TabSheetPageBreaks


## Синтаксис


bool TabSheetPageBreaks(TabSheetId sheetMon, TabSheetPageBreaksArg
 tArg)


## Параметры


sheetMon. Моникёр
 листа, для которого выполняется операция.


tArg. Параметры выполнения
 операции.


## Описание


Операция TabSheetPageBreaks
 управляет разрывами на листе.


## Комментарии


Операция позволяет добавлять и удалять разрывы. Для выполнения операции
 укажите в поле sheetMon моникёр
 листа, а в поле tArg параметры
 выполняемого с разрывами действия. Моникёр может быть сформирован на основании
 моникёра открытого экземпляра объекта, с которым осуществляется работа.


Результатом выполнения операции будет логическое значение true,
 если действие с разрывами завершилось успешно.


## Пример


Ниже приведён пример добавления разрывов в области ячейки D3 таблицы
 листа. В запросе передаётся моникёр листа, координаты ячейки и тип выполняемого
 действия - добавление разрывов. В ответе возвращается признак успешного
 добавления разрывов.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<TabSheetPageBreaks xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<sheetMon xmlns="****">
  <id>NDGHKCDLCBLNFOAEJNBBJMAHAKIHICKEBLMNKOOJNMJDMNNL!M!S!PPMGPCHDLCBLNFOAEGPFKNEPGHMDBPLNEBIECLNEEHJGBNOFO!Sheets!1</id>  </sheetMon>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <action>0</action>[![](../../minus.gif)](../../#)<range>
  <left>3</left>  <top>3</top>  <width>1</width>  <height>1</height>  </range>
  </tArg>
  </TabSheetPageBreaks>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <TabSheetPageBreaksResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</TabSheetPageBreaksResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "TabSheetPageBreaks" :
  {
   "sheetMon" :
    {
     "id" : "NDGHKCDLCBLNFOAEJNBBJMAHAKIHICKEBLMNKOOJNMJDMNNL!M!S!PPMGPCHDLCBLNFOAEGPFKNEPGHMDBPLNEBIECLNEEHJGBNOFO!Sheets!1"
    },
   "tArg" :
    {
     "action" : "0",
     "range" :
      {
       "left" : "3",
       "top" : "3",
       "width" : "1",
       "height" : "1"
      }
    }
  }
}

### JSON-ответ:


{
 "TabSheetPageBreaksResult" : "1"
}


public static bool AddPageBreak(string moniker, TabRange tRange = null)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tAdd = new TabSheetPageBreaks()
    {
        sheetMon = new TabSheetId() { id = moniker },
        tArg = new TabSheetPageBreaksArg()
        {
            action = 0, // 0 - Добавить разрывы
            range = tRange
        }
    };
    // Добавление разрывов
    var result = somClient.TabSheetPageBreaks(tAdd);
    return result;
}


См. также:


[Таблица:
 Операции](Table/tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
