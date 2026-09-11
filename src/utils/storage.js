 const STORAGE_KEY = "expenses";
 
 export function loadExpenses() {
	 const raw = localStorage.getItem(STORAGE_KEY);
	 return raw ? JSON.parse(raw) : [];
 }
 
 export function saveExpenses (expenses) {
	 localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
 }