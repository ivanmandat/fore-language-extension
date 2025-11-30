# ApplySelControl: Операция

ApplySelControl: Операция
-


**


# ApplySelControl


## Синтаксис


ApplySelControlResult ApplySelControl(AlgId tAlg,
 ApplySelControlArg tArg)


## Параметры


tAlg. Моникёр
 экземпляра алгоритма расчёта показателей или его блока.


tArg. Параметры выполнения
 операции.


## Описание


Операция ApplySelControl управляет
 отметкой зависимых измерений.


## Комментарии


Операция позволяет получать список измерений источника/приёмника, а
 также при передаче отметки какого-либо измерения получать перестроенные
 зависимые измерения. Для выполнения операции укажите в поле tAlg
 моникёр алгоритма расчёта или его блока, а в поле tArg
 параметры выполнения операции. Моникёр может быть получен при выполнении
 операции [OpenAlg](OpenAlg.htm).


Если в поле tArg.selections
 передаётся пустая коллекция, то в ответе будет получен список отметок
 измерений.


Если в поле tArg.selections
 передаётся какая-либо отметка, то в ответе будут получены переоткрытые
 управляемые измерения с учётом переданной отметки.


## Пример


Ниже приведён пример получения списка измерений куба-источника, используемого
 в алгоритме расчёта. В запросе передаётся моникёр алгоритма расчёта и
 ключ куба. В ответе приходит общая информация об измерениях, а также информация
 о наличии управляемых и управляющих измерениях.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<ApplySelControl xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tAlg xmlns="****">
  <id>S1!M!S!C10</id>  </tAlg>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <stubKey>293668</stubKey>  <selections />
  </tArg>
  </ApplySelControl>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<ApplySelControlResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<selections xmlns="****">
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<dimension>
  <k>293670</k>  <id>FACTS</id>  <n>Факты</n>  <vis>1</vis>[![](../../minus.gif)](../../#)<desc ds="****" isShortcut="**0**" isLink="**0**" ver="**1**" hf="**0**">
  <i>FACTS</i>  <n>Факты</n>  <k>293670</k>  <c>1028</c>  <p>293668</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </desc>
  </dimension>
  <selectionId>S1!M!S!C11</selectionId>  <tag />
  </it>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<dimension>
  <k>293663</k>  <id>OBJ293663</id>  <n>Типы договоров</n>  <vis>1</vis>[![](../../minus.gif)](../../#)<desc ds="****" isShortcut="**0**" isLink="**0**" ver="**4**" hf="**0**">
  <i>OBJ293663</i>  <n>Типы договоров</n>  <k>293663</k>  <c>3076</c>  <p>293662</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </desc>
  </dimension>
  <selectionId>S1!M!S!C12</selectionId>  <tag />
  </it>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<dimension>
  <k>293665</k>  <id>OBJ293665</id>  <n>Договора</n>  <vis>1</vis>[![](../../minus.gif)](../../#)<desc ds="****" isShortcut="**0**" isLink="**0**" ver="**4**" hf="**0**">
  <i>OBJ293665</i>  <n>Договора</n>  <k>293665</k>  <c>3076</c>  <p>293662</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </desc>
  </dimension>
  <selectionId>S1!M!S!C13</selectionId>  <tag />
  </it>
  </selections>
[![](../../minus.gif)](../../#)<dependencies xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <ownerDimKey>293663</ownerDimKey>[![](../../minus.gif)](../../#)<ownedDimKeys>
  <l>293665</l>  </ownedDimKeys>
  </it>
  </dependencies>
  </ApplySelControlResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "ApplySelControl" :
  {
   "tAlg" :
    {
     "id" : "S1!M!S!C10"
    },
   "tArg" :
    {
     "stubKey" : "293668",
     "selections" : ""
    }
  }
}

### JSON-ответ:


{
 "ApplySelControlResult" :
  {
   "selections" :
    {
     "it" :
      [
        {
         "dimension" :
          {
           "k" : "293670",
           "id" : "FACTS",
           "n" : "Факты",
           "vis" : "1",
           "desc" :
            {
             "@ds" : "",
             "@isShortcut" : "0",
             "@isLink" : "0",
             "@ver" : "1",
             "@hf" : "0",
             "i" : "FACTS",
             "n" : "Факты",
             "k" : "293670",
             "c" : "1028",
             "p" : "293668",
             "h" : "0",
             "hasPrv" : "0",
             "ic" : "0",
             "trackElementDependents" : "0"
            }
          },
         "selectionId" : "S1!M!S!C11",
         "tag" : ""
        },
        {
         "dimension" :
          {
           "k" : "293663",
           "id" : "OBJ293663",
           "n" : "Типы договоров",
           "vis" : "1",
           "desc" :
            {
             "@ds" : "",
             "@isShortcut" : "0",
             "@isLink" : "0",
             "@ver" : "4",
             "@hf" : "0",
             "i" : "OBJ293663",
             "n" : "Типы договоров",
             "k" : "293663",
             "c" : "3076",
             "p" : "293662",
             "h" : "0",
             "hasPrv" : "0",
             "ic" : "0",
             "trackElementDependents" : "0"
            }
          },
         "selectionId" : "S1!M!S!C12",
         "tag" : ""
        },
        {
         "dimension" :
          {
           "k" : "293665",
           "id" : "OBJ293665",
           "n" : "Договора",
           "vis" : "1",
           "desc" :
            {
             "@ds" : "",
             "@isShortcut" : "0",
             "@isLink" : "0",
             "@ver" : "4",
             "@hf" : "0",
             "i" : "OBJ293665",
             "n" : "Договора",
             "k" : "293665",
             "c" : "3076",
             "p" : "293662",
             "h" : "0",
             "hasPrv" : "0",
             "ic" : "0",
             "trackElementDependents" : "0"
            }
          },
         "selectionId" : "S1!M!S!C13",
         "tag" : ""
        }
      ]
    },
   "dependencies" :
    {
     "it" :
      {
       "ownerDimKey" : "293663",
       "ownedDimKeys" :
        {
         "l" : "293665"
        }
      }
    }
  }
}


public static ApplySelControlResult GetApplySelDims(string moniker, uint key)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tApply = new ApplySelControl()
    {
        tAlg = new AlgId() { id = moniker },
        tArg = new ApplySelControlArg()
        {
            stubKey = key,
            selections = new AlgDimSelection[0]
        }
    };
    //Получение списка измерений
    var result = somClient.ApplySelControl(tApply);
    return result;
}


См. также:


[Работа с
 алгоритмами расчёта показателей](Algo_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
