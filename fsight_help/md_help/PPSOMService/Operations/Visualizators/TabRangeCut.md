# TabRangeCut: Операция

TabRangeCut: Операция
-


**


# TabRangeCut


## Синтаксис


TabRangeCopyResult TabRangeCut(string mon, TabRangeCopyArg
 tArg)


## Параметры


mon. Моникёр
 для работы с диапазоном ячеек таблицы.


tArg. Параметры вырезания диапазона
 ячеек.


## Описание


Операция TabRangeCut вырезает
 содержимое диапазона ячеек.


## Комментарии


Операция позволяет вырезать текст, формулы и оформление диапазона ячеек.
 Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Sheets!ключ
 листа!адрес диапазона».


Результатом операции будет коллекция отдельных элементов, содержащих
 вырезанные данные. Для вставки используйте операцию [TabRangePaste](TabRangePaste.htm).


## Пример


Ниже приведён пример вырезания содержимого диапазона ячеек. В запросе
 передаётся моникёр диапазона и формат, в котором осуществляется вырезание.
 В ответе приходит содержимое диапазона в виде потока байтов.


	 SOAP JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<TabRangeCut xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Sheets!1!C0:D3</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <type>1</type>  </tArg>
  </TabRangeCut>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<TabRangeCutResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<data xmlns="****">
[![](../../minus.gif)](../../#)<it type="**1**">
  <data>egAAAAMAAAB4nN2UzQ3CMAyFX5z0Z58OgDoAO8AFCaknFqBswigdgIk4AHFil5AKcSytJbeN7Sb++lQP3fYOb4RoVpzXDondUPhrixOO2KPjUFsDfUj6VD8uroehaZpN6rqJeXrDF+PceYdHfIqHm4p43/E1kwcoD9gsYNIjSCMXQybgSF/LxlNGm+DROvAUje+pelbwTCji4n8mUE8FckJQhKI5NUBOgCkBSeO8KTf7WaHTgzKVisWopHyUqVQKgZtZpZJ+qaTfXif3VCUrDeh8V8YKqxgVFu+fLJWwFrwg8YwSOkwkzCpegSZ7ww==</data>  </it>
  </data>
  </TabRangeCutResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "TabRangeCut" :
  {
   "mon" : "S1!M!S!P1!Sheets!1!C0:D3",
   "tArg" :
    {
     "type" : "1"
    }
  }
}

### JSON-ответ:


{
 "TabRangeCutResult" :
  {
   "data" :
    {
     "it" :
      {
       "@type" : "1",
       "data" : "egAAAAMAAAB4nN2UzQ3CMAyFX5z0Z58OgDoAO8AFCaknFqBswigdgIk4AHFil5AKcSytJbeN7Sb++lQP3fYOb4RoVpzXDondUPhrixOO2KPjUFsDfUj6VD8uroehaZpN6rqJeXrDF+PceYdHfIqHm4p43\/E1kwcoD9gsYNIjSCMXQybgSF\/LxlNGm+DROvAUje+pelbwTCji4n8mUE8FckJQhKI5NUBOgCkBSeO8KTf7WaHTgzKVisWopHyUqVQKgZtZpZJ+qaTfXif3VCUrDeh8V8YKqxgVFu+fLJWwFrwg8YwSOkwkzCpegSZ7ww=="
      }
    }
  }
}


public static TabRangeCopyResult CutTabRange(string moniker, string sheetKey, string address)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tTab = new TabRangeCut()
    {
        mon = moniker + "!Sheets!" + sheetKey + '!' + address,
        tArg = new TabRangeCopyArg()
        {
            type = 1
        }
    };
    // Вырезание диапазона ячеек
    var result = somClient.TabRangeCut(tTab);
    return result;
}


См. также:


[Таблица](Table/tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
