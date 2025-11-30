# EmulateGridHyperlinkClick: Операция

EmulateGridHyperlinkClick: Операция
-


**


# EmulateGridHyperlinkClick


## Синтаксис


EmulateGridHyperlinkClickResult EmulateGridHyperlinkClick(string
 mon, EaxGridEmulateHyperlinkClick tVal)


## Параметры


mon. Моникёр
 визуализатора Таблица.


tVal. Параметры эмуляции щелчка
 по гиперссылке в ячейке таблицы.


## Описание


Операция EmulateGridHyperlinkClick
 эмулирует щелчок по гиперссылке в ячейке таблицы области данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр таблицы области данных в формате «Моникёр
 экземпляра рег.отчёта!DataArea!Views!ключ таблицы», а в поле tVal параметры эмуляции щелчка
 по гиперссылке.


Результатом выполнения операции будет информация о действии, которое
 было выполнено при щелчке по гиперссылке.


## Пример


Ниже приведён пример эмуляции щелчка по гиперссылке в ячейке таблицы
 области данных. В запросе передаётся моникёр таблицы. В ответе возвращается
 информация об объекте, который был открыт при щелчке по гиперссылке.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<EmulateGridHyperlinkClick xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!DataArea!Views!1</mon>[![](../../minus.gif)](../../#)<tVal xmlns="****">
  <row>2</row>  <column>0</column>  </tVal>
  </EmulateGridHyperlinkClick>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<EmulateGridHyperlinkClickResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<obj xmlns="****">
  <id>S1!M!S!P2</id>  </obj>
  <classId xmlns="****">2562</classId>  </EmulateGridHyperlinkClickResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "EmulateGridHyperlinkClick" :
  {
   "mon" : "S1!M!S!P1!DataArea!Views!1",
   "tVal" :
    {
     "row" : "2",
     "column" : "0"
    }
  }
}

### JSON-ответ:


{
 "EmulateGridHyperlinkClickResult" :
  {
   "obj" :
    {
     "id" : "S1!M!S!P2"
    },
   "classId" : "2562"
  }
}


public static EaxGridHyperlinkClickResult EmulateGridHyperlinkClick(string moniker, uint tableKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tClick = new EmulateGridHyperlinkClick()
    {
        mon = moniker + "!DataArea!Views!" + tableKey,
        tVal = new EaxGridEmulateHyperlinkClick()
        {
            row = 2,
            column = 0
        }
    };
    //Эмуляция щелчка по гиперссылке в ячейке
    var result = somClient.EmulateGridHyperlinkClick(tClick);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
